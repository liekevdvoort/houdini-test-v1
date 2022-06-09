class SimonBg {

    static get inputProperties(){
        return ['--number-of-circles'];
    }

    paint(context, size, props){
      
        for(var i = 0; i < props.get('--number-of-circles'); i++){
            let fraction = i * 2;

            context.beginPath();
            context.fillStyle = 'red';
            context.arc(20 + (fraction * 10), size.height - 10, 8, 0 , 2*Math.PI);
            context.fill();
        }
        
        context.beginPath();
        context.moveTo(props.get('--number-of-circles') * 23, size.height - 10);
        context.lineTo(size.width, size.height - 10)
        context.stroke();
    }
  }
  
  registerPaint('simonbg', SimonBg);