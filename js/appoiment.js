function goToStep(step) {
            document.querySelectorAll('.step-box').forEach(el => el.classList.add('hidden'));
            document.getElementById('step' + step).classList.remove('hidden');

            let steps = document.querySelectorAll('.step');
            steps.forEach((el, i) => {
                el.classList.remove('text-teal-600', 'font-bold');
                el.classList.add('text-gray-400');
                if (i < step) {
                    el.classList.add('text-teal-600', 'font-bold');
                }
            });

            if (step >= 2) {
                const type = document.getElementById("consultationType").value;
                const consultant = document.getElementById("consultant").value;
                const date = document.getElementById("date").value;
                const time = document.getElementById("startTime").value + " - " + document.getElementById("endTime").value;

                document.getElementById("summary1").innerText = `${type} with ${consultant} on ${date} at ${time}`;
                document.getElementById("summaryType").innerText = type;
                document.getElementById("summaryConsultant").innerText = consultant;
                document.getElementById("summaryDate").innerText = date;
                document.getElementById("summaryTime").innerText = time;
            }
        }