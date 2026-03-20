import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import './Login.css';

function Login() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid }, setError, watch } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const navigate = useNavigate();
    const watchedEmail = watch('email');
    const watchedPassword = watch('password');
    const isFormValid = isValid && watchedEmail && watchedPassword;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            console.log('Datos enviados:', data);
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            navigate('/');
        } catch (error) {
            setError('submit', { message: 'Error al iniciar sesión' });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Inicia Sesión</h1>
                <p className="login-subtitle">Accede a tu cuenta para continuar</p>

                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@correo.com"
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            disabled={isSubmitting}
                            {...register('email', {
                                required: 'El correo es requerido',
                                pattern: {
                                    value: emailRegex,
                                    message: 'Ingresa un correo válido (ej: usuario@dominio.com)'
                                }
                            })}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email.message}</span>
                        )}
                        {watchedEmail && !errors.email && (
                            <span className="success-message">✓ Correo válido</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Mínimo 6 caracteres"
                            className={`form-input ${errors.password ? 'input-error' : ''}`}
                            disabled={isSubmitting}
                            {...register('password', {
                                required: 'La contraseña es requerida',
                                minLength: {
                                    value: 6,
                                    message: 'La contraseña debe tener al menos 6 caracteres'
                                }
                            })}
                        />
                        {errors.password && (
                            <span className="error-message">{errors.password.message}</span>
                        )}
                        {watchedPassword && !errors.password && (
                            <span className="success-message">✓ Contraseña válida</span>
                        )}
                    </div>

                    <div className="help-text">
                        <p>Usa un correo válido y una contraseña de al menos 6 caracteres</p>
                    </div>

                    <button
                        type="submit"
                        className={`login-button ${isFormValid ? 'active' : 'disabled'} ${isSubmitting ? 'loading' : ''}`}
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Verificando...
                            </>
                        ) : (
                            'Ingresar'
                        )}
                    </button>

                    <div className="back-link">
                        <a href="/">Volver al inicio</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login