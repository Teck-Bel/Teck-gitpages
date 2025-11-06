document.addEventListener('DOMContentLoaded', function() {
  const afdelingSelect = document.getElementById('afdeling');
  const productSelect = document.getElementById('product');

  // Producten per afdeling
  const productenPerAfdeling = {
    SkyTeck: ['Checklist app', 'Bug wipper bedienings systeem', 'ATC simulator', 'Flight VFR simulator', 'Flight IFR simulator', 'Flight + ATC simulator', 'Zwever hoofdwiel aandrijving'],
    AquaTeck: ['Base', 'Pro', 'Fleet Link', 'Port Guard', 'Fleet Command', 'Arduino Boat', 'Simulator', 'Boeien hijs systeem', 'Parcours leggen systeem'],
    EduTeck: ['Arduino Boat', 'Zelfrijdende mini auto', 'Luchtvaart introductie', 'Drones & programmeren', 'Vliegtuig op lucht'],
    ModelTeck:['Aruino Boat', 'Arduino hijskraan', 'Arduino boeien kraan']
  };

  afdelingSelect.addEventListener('change', function() {
    const geselecteerdeAfdeling = this.value;

    // Eerst product dropdown leegmaken
    productSelect.innerHTML = '<option value="">-- Kies een product --</option>';

    if (geselecteerdeAfdeling && productenPerAfdeling[geselecteerdeAfdeling]) {
      productenPerAfdeling[geselecteerdeAfdeling].forEach(function(product) {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productSelect.appendChild(option);
      });
    }
  });
});
