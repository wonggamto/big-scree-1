window.clientWidth = document.documentElement.clientWidth
window.clientHeight = document.documentElement.clientHeight
window.pageWidth = window.clientWidth / window.clientHeight > 16 / 9 ? window.clientHeight * (16 / 9) : window.clientWidth
window.pageHeight = window.pageWidth / (16 / 9)
const string = `<style>html{
      font-size: ${window.pageWidth / 100}px
    }
    #app{
        /*margin: 0 auto;*/
        background-image: linear-gradient(180deg, #002947 0%, #001222 100%);
        /*background: #ccc;*/
        /*width: ${window.pageWidth}px;*/
        height: ${window.pageHeight}px;
        margin-top: ${(window.clientHeight - window.pageHeight) / 2}px;
        }
    * {box-sizing: border-box;margin: 0; padding: 0; font-weight: normal;}
    *::before {box-sizing: border-box;}
    *::after {box-sizing: border-box;}
    </style>`
document.write(string)
