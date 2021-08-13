(function (){
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24

    let birthday = "Aug 16, 2021 16:30:00", countdown = new Date(birthday).getTime(),
    x = setInterval(function(){
        let now = new Date().getTime(),
        flag = countdown - now

        document.getElementById('days').innerHTML = Math.floor(flag / day)
        document.getElementById('hours').innerHTML = Math.floor((flag % day) / hour)
        document.getElementById('minutes').innerHTML = Math.floor((flag % hour) / minute)
        document.getElementById('seconds').innerHTML = Math.floor((flag % minute) / second)

        //If I reach my birthday

        if(flag<=0){
            document.getElementById('content').style.display = "block"
            document.getElementById('countdown').style.display = "none"
            document.getElementById('myBirthday').innerHTML = "The Wait is Over! As we are going to Noida Sector 119, I wish that we all have a Great Journey and Enjoy ourselves! It's going to be a Great Fun for us there!"
            document.getElementById('gift').style.visibility="visible"
            document.getElementById('sentence').style.visibility="visible"
            clearInterval(x)
        }
    
    },0)
    
}())

