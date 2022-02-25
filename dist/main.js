/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


const contentDiv = document.querySelector("div");





const getDownload = function() {
    const downloadAPI = "https://8m2nl02f08.execute-api.ap-southeast-1.amazonaws.com/api/download"
    const http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            console.log(http.responseText);
        }
    }
    http.open("GET", downloadAPI);
    http.send();
}

const button = document.createElement("button");
button.addEventListener("click", getDownload);

contentDiv.appendChild(button);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1leHBvcnQtZnJvbnRlbmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuXG5cblxuXG5cbmNvbnN0IGdldERvd25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZG93bmxvYWRBUEkgPSBcImh0dHBzOi8vOG0ybmwwMmYwOC5leGVjdXRlLWFwaS5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2FwaS9kb3dubG9hZFwiXG4gICAgY29uc3QgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIFxuICAgIGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaHR0cC5vcGVuKFwiR0VUXCIsIGRvd25sb2FkQVBJKTtcbiAgICBodHRwLnNlbmQoKTtcbn1cblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0RG93bmxvYWQpO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9