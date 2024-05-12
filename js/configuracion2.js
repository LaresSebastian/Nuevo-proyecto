document.addEventListener('DOMContentLoaded', function() {
    // Obtener la referencia al elemento del calendario
    let calendar = document.getElementById('calendar');
    let clearSelectionBtn = document.getElementById('clearSelection');
    let finalizeSelectionBtn = document.getElementById('finalizeSelection');

    // Crear una fecha inicial (puede ser la fecha actual)
    var currentDate = new Date();
    var selectedDateTime = null;

    // Función para generar el calendario
    function generateCalendar(year, month) {
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var html = '<table><tr><th>D</th><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th></tr><tr>';
        var dayOfWeek = firstDay.getDay();

        // Llenar los días previos al primer día del mes
        for (var i = 0; i < dayOfWeek; i++) {
            html += '<td></td>';
        }

        for (var day = 1; day <= lastDay.getDate(); day++) {
            var date = new Date(year, month, day);
            var className = '';

            // Verificar si el turno ya está ocupado
            if (localStorage.getItem(date.getTime())) {
                className = 'unavailable';
            }

            // Generar el HTML para el día
            html += '<td class="' + className + '" data-date="' + date.getTime() + '">' + day + '</td>';

            // Saltar a una nueva fila al final de la semana
            if (date.getDay() === 6) {
                html += '</tr><tr>';
            }
        }

        html += '</tr></table>';

        // Mostrar el calendario generado en el DOM
        calendar.innerHTML = html;

        // Agregar manejador de eventos para la selección de fechas
        calendar.querySelectorAll('td').forEach(function(cell) {
            cell.addEventListener('click', function() {
                var selectedDate = new Date(parseInt(this.getAttribute('data-date')));
                if (!localStorage.getItem(selectedDate.getTime())) {
                    // Marcar como seleccionado
                    this.classList.toggle('selected');

                    // Guardar la selección en localStorage
                    if (this.classList.contains('selected')) {
                        localStorage.setItem(selectedDate.getTime(), true);
                        selectedDateTime = selectedDate;
                    } else {
                        localStorage.removeItem(selectedDate.getTime());
                        selectedDateTime = null;
                    }
                }
            });
        });
    }

    // Generar el calendario para el mes actual
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

    // Manejar el botón de limpiar selección
    clearSelectionBtn.addEventListener('click', function() {
        calendar.querySelectorAll('.selected').forEach(function(cell) {
            cell.classList.remove('selected');
            localStorage.removeItem(cell.getAttribute('data-date'));
        });
        selectedDateTime = null;
    });

    // Manejar el botón de finalizar selección
    finalizeSelectionBtn.addEventListener('click', function() {
        if (selectedDateTime) {
            // Redirigir a la página de pago
            window.location.href = '../internos/simil_mp.html';
        } else {
            alert('Por favor selecciona una fecha y hora antes de finalizar.');
        }
    });
});
