

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${tihs.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventlistener('change', handleUpdate));
inputs.forEach(input => input.addEventlistener('mousemove', handleUpdate));

