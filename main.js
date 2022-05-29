(
    function() {

        const generateColorsSet = () => {
            const randomColors = []
            for(let i = 0;i<1000;i++) {
                const randomColor = `#${Math.floor((Math.random()*1000000)+1).toString().padStart(6, '0')}`
                if(randomColors.indexOf(randomColor) < 0) {
                    randomColors.push(randomColor)
                }
            }
            return randomColors
        }
        
        const createColorButton = (color, primaryColor, container) => {
            const btn = document.createElement("button")
            btn.classList.add('colorButton')
            btn.setAttribute('data-color', color)
            btn.setAttribute('data-set', primaryColor ? 'primary' : 'secondary')
            btn.style.backgroundColor = color
            container.appendChild(btn);
        }
        
        const generateColorButtons = (container, colors, primaryColor = true) => {
            colors.map(color => createColorButton(color, primaryColor, container))
        }

        const selectedColors = {
            primary: '',
            secondary: ''
        }

        const setColor = (value, set) => {
            if(set === 'primary') {
                selectedColors.primary = value
            }
            if(set === 'secondary') {
                selectedColors.secondary = value
            }
        }

        const setMixedColor = () => {
            if(selectedColors.primary && selectedColors.secondary) {
                mixedColorContainer.style.backgroundColor = chroma.mix(selectedColors.primary, selectedColors.secondary, 0.25, 'rgb').hex()
            }
        }

        const setAsActive = element => {
            const container = element.parentElement
            const currentSelected = container.querySelector('.active')
            if (currentSelected) {
                currentSelected.classList.remove('active')
            }
            element.classList.add('active')
        }

        const handleClick = e => {
            const color = e.target.attributes.getNamedItem('data-color')
            const set = e.target.attributes.getNamedItem('data-set')
            if(color && color.value && set && set.value) {
                setColor(color.value, set.value)
                setAsActive(e.target)
                setMixedColor()
            }
        }

        const colorsSet = generateColorsSet()
        const colorMixerElement = document.getElementById('colorMixer')
        const mixedColorContainer = colorMixerElement.querySelector('.mixedColor')

        generateColorButtons(colorMixerElement.querySelector('.primaryColors'), colorsSet)
        generateColorButtons(colorMixerElement.querySelector('.secondaryColors'), colorsSet, false)
        
        colorMixerElement.addEventListener('click', handleClick)
    }
)()

