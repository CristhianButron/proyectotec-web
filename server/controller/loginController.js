import { loginUsuario } from '../service/loginService.js';
export const loginController = async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
    }

    try {
        const { token } = await loginUsuario(correo, password);
        
        res.cookie('access_token', token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        res.status(200).json({ token });
        
    } catch (error) {
        if (error.message === 'Usuario no encontrado' || error.message === 'Contraseña incorrecta') {
            res.status(401).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error en el servidor', error });
        }
    }
};