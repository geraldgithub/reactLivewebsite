function Date_time(){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time=newDate.toLocaleTimeString()
    return `${year}${'/'}${month<10?`0${month}`:`${month}`}${'/'}${date}${' '}${time}`
}export default Date_time;