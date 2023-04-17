let pic = ["url('assets/img/bg/1.jpg.webp')" , "url('assets/img/bg/45.jpg.webp')"]
let _pop
document.getElementById('arrowLeft').addEventListener('click' , function(){
    document.querySelector('#section2>div').style.backgroundImage = pic[1];
    pic.reverse() //?
})
document.getElementById('arrowRight').addEventListener('click' , function(){
   document.querySelector('#section2>div').style.backgroundImage = pic[1];
   pic.reverse()
})

document.getElementById('openSubLmeno').addEventListener('click', function(){
    this.classList.toggle('_rotate')
    document.getElementById('subLmenu').style.transition = '0.5s'
    document.getElementById('subLmenu').classList.toggle('_submenu')
})

document.getElementById('ham').addEventListener('click', function(){
    this.classList.add('d-none')
    document.getElementById('xham').classList.remove('d-none')
    document.getElementById('xham').classList.add('d-flex')
    document.getElementById('lMenu').style.left= '0px';
})
document.getElementById('xham').addEventListener('click', function(){
    document.getElementById('ham').classList.remove('d-none')
    this.classList.remove('d-flex')
    this.classList.add('d-none')
    document.getElementById('lMenu').style.left= '-165px';
})

document.getElementById('x').addEventListener('click', function(){
    document.getElementById('ham').classList.remove('d-none')
    document.getElementById('lMenu').style.left= '-165px';
})
let flag1 = 0
document.getElementById('arrowLeft').addEventListener('click' , function(){
   document.getElementById('txt1').classList.toggle('d-none')
   document.getElementById('txt2').classList.toggle('d-none')
   setTimeout(function(){
    if(flag1 == 0){
        document.querySelector('#txt2>h4').style.height = '5.1rem'
        document.querySelector('#txt2>h2').style.height = '5.1rem'
        document.querySelectorAll('#txt2>div')[0].style.height = '5.1rem'
        document.querySelectorAll('#txt2>div')[1].style.height = '5.1rem'
        document.querySelectorAll('#txt2>div')[2].style.height = '5.1rem'

        document.querySelectorAll('#txt1>h2')[0].style.height = '0'
        document.querySelectorAll('#txt1>h2')[1].style.height = '0'
        document.querySelector('#txt1>p').style.height = '0'
        document.querySelector('#txt1>div').style.height = '0'
        flag1 = 1;
    }else if(flag1 == 1){
        document.querySelector('#txt2>h4').style.height = '0'
        document.querySelector('#txt2>h2').style.height = '0'
        document.querySelectorAll('#txt2>div')[0].style.height = '0'
        document.querySelectorAll('#txt2>div')[1].style.height = '0'
        document.querySelectorAll('#txt2>div')[2].style.height = '0'

        document.querySelectorAll('#txt1>h2')[0].style.height = '4.8rem'
        document.querySelectorAll('#txt1>h2')[1].style.height = '5rem'
        document.querySelector('#txt1>p').style.height = '3rem'
        document.querySelector('#txt1>div').style.height = '3rem'
        flag1 = 0;
    }
  
   },100)
  
})
document.getElementById('arrowRight').addEventListener('click' , function(){
    document.getElementById('txt1').classList.toggle('d-none')
    document.getElementById('txt2').classList.toggle('d-none')

    setTimeout(function(){
        if(flag1 == 0){
          document.querySelector('#txt2>h4').style.height = '5.1rem'
          document.querySelector('#txt2>h2').style.height = '5.1rem'
          document.querySelectorAll('#txt2>div')[0].style.height = '5.1rem'
          document.querySelectorAll('#txt2>div')[1].style.height = '5.1rem'
          document.querySelectorAll('#txt2>div')[2].style.height = '5.1rem'

          document.querySelectorAll('#txt1>h2')[0].style.height = '0'
          document.querySelectorAll('#txt1>h2')[1].style.height = '0'
          document.querySelector('#txt1>p').style.height = '0'
          document.querySelector('#txt1>div').style.height = '0'
          flag1 = 1
        }else if(flag1 == 1){
            document.querySelector('#txt2>h4').style.height = '0'
            document.querySelector('#txt2>h2').style.height = '0'
            document.querySelectorAll('#txt2>div')[0].style.height = '0'
            document.querySelectorAll('#txt2>div')[1].style.height = '0'
            document.querySelectorAll('#txt2>div')[2].style.height = '0'
    
            document.querySelectorAll('#txt1>h2')[0].style.height = '4.8rem'
            document.querySelectorAll('#txt1>h2')[1].style.height = '5rem'
            document.querySelector('#txt1>p').style.height = '3rem'
            document.querySelector('#txt1>div').style.height = '3rem'
            flag1 = 0;
        }

    },100)
  
})



// document.getElementById('anim1-1-1').offsetTop

document.getElementById('mn').addEventListener('scroll', function(){
    if(this.scrollTop+700 >document.getElementById('anim1-1-1').offsetTop){
        document.getElementById('anim1-1-1').style.transition = '2.8s';
        document.getElementById('anim1-1-1').style.transform = 'translateY(0)';
        document.getElementById('anim1-1-1').style.opacity = '1';
    }

    if(this.scrollTop+700 >document.getElementById('anim1-1-2').offsetTop){
        document.getElementById('anim1-1-2').style.transition = '2.8s';
        document.getElementById('anim1-1-2').style.transform = 'translateY(0)';
        document.getElementById('anim1-1-2').style.opacity = '1';
    }


    if(this.scrollTop+700 >document.getElementById('anim1-2-1').offsetTop){
        document.getElementById('anim1-2-1').style.transition = '3s';
        document.getElementById('anim1-2-1').style.transform = 'translateY(0)';
        document.getElementById('anim1-2-1').style.opacity = '1';
    }

    if(this.scrollTop+700 >document.getElementById('anim1-2-2').offsetTop){
        document.getElementById('anim1-2-2').style.transition = '3s';
        document.getElementById('anim1-2-2').style.transform = 'translateY(0)';
        document.getElementById('anim1-2-2').style.opacity = '1';
    }

    if(this.scrollTop+600 >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-1-1').style.transition = '1.8s';
        document.getElementById('anim2-1-1').style.transform = 'translateY(0)';
        document.getElementById('anim2-1-1').style.opacity = '1';
    }

    if(this.scrollTop+600 >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-2-1').style.transition = '1.8s';
        document.getElementById('anim2-2-1').style.transform = 'translateY(0)';
        document.getElementById('anim2-2-1').style.opacity = '1';
    }
    if(this.scrollTop+600 >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-2-2').style.transition = '1.8s';
        document.getElementById('anim2-2-2').style.transform = 'translateY(0)';
        document.getElementById('anim2-2-2').style.opacity = '1';
    }
    if(this.scrollTop+600 >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-2-3').style.transition = '1.8s';
        document.getElementById('anim2-2-3').style.transform = 'translateY(0)';
        document.getElementById('anim2-2-3').style.opacity = '1';
    }
    if(this.scrollTop >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-3-1').style.transition = '1.4s';
        document.getElementById('anim2-3-1').style.transform = 'translateY(0)';
        document.getElementById('anim2-3-1').style.opacity = '1';
    }
    if(this.scrollTop >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-3-2').style.transition = '1.4s';
        document.getElementById('anim2-3-2').style.transform = 'translateY(0)';
        document.getElementById('anim2-3-2').style.opacity = '1';
    }
    if(this.scrollTop >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-3-3').style.transition = '1.4s';
        document.getElementById('anim2-3-3').style.transform = 'translateY(0)';
        document.getElementById('anim2-3-3').style.opacity = '1';
    }
    if(this.scrollTop >document.getElementById('section4').offsetTop){
        document.getElementById('anim2-3-4').style.transition = '1.8s';
        document.getElementById('anim2-3-4').style.transform = 'translateY(0)';
        document.getElementById('anim2-3-4').style.opacity = '1';
    }

    if(this.scrollTop+500 >document.getElementById('section5').offsetTop){
        document.getElementById('anim3-1-1').style.transition = '1.4s';
        document.getElementById('anim3-1-1').style.transform = 'translateY(0)';
        document.getElementById('anim3-1-1').style.opacity = '1';
    }
    if(this.scrollTop+500 >document.getElementById('section5').offsetTop){
        document.getElementById('anim3-1-2').style.transition = '1.4s';
        document.getElementById('anim3-1-2').style.transform = 'translateY(0)';
        document.getElementById('anim3-1-2').style.opacity = '1';
    }
    if(this.scrollTop+300 >document.getElementById('section5').offsetTop){
        document.getElementById('anim3-2-1').style.transition = '2.4s';
        document.getElementById('anim3-2-1').style.transform = 'translateY(0)';
        document.getElementById('anim3-2-1').style.opacity = '1';
    }
    if(this.scrollTop+300 >document.getElementById('section5').offsetTop){
        document.getElementById('anim3-2-2').style.transition = '2.8s';
        document.getElementById('anim3-2-2').style.transform = 'translateY(0)';
        document.getElementById('anim3-2-2').style.opacity = '1';
    }
    if(this.scrollTop+300 >document.getElementById('section5').offsetTop){
        document.getElementById('anim3-2-3').style.transition = '3.4s';
        document.getElementById('anim3-2-3').style.transform = 'translateY(0)';
        document.getElementById('anim3-2-3').style.opacity = '1';
    }
    if(this.scrollTop+300 >document.getElementById('section5').offsetTop){
        document.getElementById('anim3-2-4').style.transition = '4.4s';
        document.getElementById('anim3-2-4').style.transform = 'translateY(0)';
        document.getElementById('anim3-2-4').style.opacity = '1';
    }

    if(this.scrollTop+500 >document.getElementById('section6').offsetTop){
        document.getElementById('anim4-1-1').style.transition = '1s';
        document.getElementById('anim4-1-1').style.transform = 'translateY(0)';
        document.getElementById('anim4-1-1').style.opacity = '1';
    }
    if(this.scrollTop+500 >document.getElementById('section6').offsetTop){
        document.getElementById('anim4-2-1').style.transition = '1.5s';
        document.getElementById('anim4-2-1').style.transform = 'translateX(0)';
        document.getElementById('anim4-2-1').style.opacity = '1';
    }
    if(this.scrollTop+500 >document.getElementById('section6').offsetTop){
        document.getElementById('anim4-2-2').style.transition = '2.5s';
        document.getElementById('anim4-2-2').style.transform = 'translateY(0)';
        document.getElementById('anim4-2-2').style.opacity = '1';
    }
    if(this.scrollTop+500 >document.getElementById('section6').offsetTop){
        document.getElementById('anim4-2-3').style.transition = '3.5s';
        document.getElementById('anim4-2-3').style.transform = 'translateX(0)';
        document.getElementById('anim4-2-3').style.opacity = '1';
    }

    if(this.scrollTop+500 >document.getElementById('section7').offsetTop){
        document.getElementById('anim5-1-1').style.transition = '1.5s';
        document.getElementById('anim5-1-1').style.transform = 'translateY(0)';
        document.getElementById('anim5-1-1').style.opacity = '1';
    }
    if(this.scrollTop+400 >document.getElementById('section7').offsetTop){
        document.getElementById('anim5-2-1').style.transition = '2.5s';
        document.getElementById('anim5-2-1').style.transform = 'translateY(0)';
        document.getElementById('anim5-2-1').style.opacity = '1';
    }
    if(this.scrollTop > 100){
        document.getElementById('section1').style.transition = '0.5s'
        document.getElementById('section1').style.height = '60px'
    }
    if(this.scrollTop < 100){
        document.getElementById('section1').style.height = '110px'
    }










})
