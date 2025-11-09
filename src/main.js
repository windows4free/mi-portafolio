import '../less/style.less';
import '../less/portafolio.less';

console.log('🚀 Portafolio cargado con LESS');

// JavaScript para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById('contactoForm');
    const respuestaDiv = document.getElementById('respuesta');
    
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            respuestaDiv.innerHTML = `
                <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    ✅ Mensaje enviado correctamente. ¡Te contactaré pronto!
                </div>
            `;
            
            // Limpiar formulario
            contactoForm.reset();
        });
    }
});