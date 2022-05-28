   const generateColorsSet = () => {
            const randomColors = []
            for(let i = 0;i<100;i++) {
                const randomColor = `#${Math.floor((Math.random()*1000000)+1).toString().padStart(6, '0')}`
                if(randomColors.indexOf(randomColor) < 0) {
                    randomColors.push(randomColor)
                }
            }
            return randomColors
        }

        // const mixed = chroma.mix('#000000', '#ffffff', 0.25, 'rgb').hex()
        // const clicker = document.getElementById('onClickHandler')
        // clicker.addEventListener('click', e => {
        //     const attr = e.target.attributes.getNamedItem('data-val')
        //     if(attr) {
        //     console.log(attr.value, mixed)
        //     }
        // })


const generateColorButtons = (elementId, colors) => {
    const container = document.getElementById(elementId)
    colors.map(element => {
        const btn = document.createElement("button")
        btn.classList.add('colorButton')
        btn.setAttribute('data-color', element)
        btn.style.backgroundColor = element
        container.appendChild(btn);
    })
}  
(
    function() {
        const colorsSet = generateColorsSet()

        generateColorButtons('primaryColors', colorsSet)
        generateColorButtons('secondaryColors', colorsSet)




    }
)()


