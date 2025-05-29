document.addEventListener('DOMContentLoaded', function() {
  const afdelingSelect = document.getElementById('afdeling');
  const productSelect = document.getElementById('product');

  // Producten per afdeling
  const productenPerAfdeling = {
    SkyTeck: ['Product ST1', 'Product ST2', 'Product ST3'],
    WaterTeck: ['Product WT1', 'Product WT2'],
    EduTeck: ['Product ET1', 'Product ET2', 'Product ET3', 'Product ET4']
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
