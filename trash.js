class trash{
    constructor(){
        this.body=Bodies.rectangle(590,680,200,20,{isStatic: true})
        World.add(world, this.body)

        this.left=Bodies.rectangle(495, 630, 20,130)
    }

    display(){
        rect(590,680,200,20)
        rect(495,630,20,130)
    }
}