AFRAME.registerComponent("drive",{
    init:function(){
        var gamestatevalue=this.el.getAttribute("game")
        if(gamestatevalue==play){
            this.drivecar()
        }
    },
    isvelocityactive:function(){
        console.log("HI")
        return Math.random()<0.25
    }
}
)