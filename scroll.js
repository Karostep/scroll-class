    class Scroll{
    objects;
    root;
    lbut;
    rbut;
    count = 0;
    position = 1;
    max;
    step;
    constructor(divnm,root,leftbut,rightbut){
        this.objects = divnm;
        this.root = root;
        this.lbut = leftbut;
        this.rbut = rightbut;
        this.max = this.objects.length-1;
        this.step = this.objects[0].getBoundingClientRect().width;
        this.getEvents();
    }
    getEvents(){
        this.lbut.addEventListener("click",() => {this.mainfunc(false)});   
        this.rbut.addEventListener("click",() => {this.mainfunc(true)});   
    }
    mainfunc(button){
        if(button){
            if(this.position < this.max){
                this.count -= this.step;
                this.position++;
                this.objects[this.position].style.transform = "scale(1.1)";
                this.objects[this.position - 1].style.transform = "scale(1)";
                this.objects[this.position].style.zIndex = "30";
                this.objects[this.position - 1].style.zIndex = "20";
            }
        }
        else{
            if(this.position > 0){
                this.count+= this.step;
                this.position--;
                this.objects[this.position].style.transform = "scale(1.1)";
                this.objects[this.position + 1].style.transform = "scale(1)";
                this.objects[this.position].style.zIndex = "30";
                this.objects[this.position + 1].style.zIndex = "20";
            }
        }
        this.root.style.transform = `translateX(${this.count}px)`;
    }
}
// const scroll = new Scroll(document.querySelectorAll(".cart"),document.querySelector(".maincol"),document.querySelector(".leftbut"),document.querySelector(".rightbut"));
export default Scroll;
