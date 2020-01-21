class car
{
    run()
    {
        return 60;
    }
}
class maruthi extends car{
    run()
    {
        return super.run()+40
    }
}
class maruthi800 extends maruthi{
    run()
    {
        console.log(super.run()+100)
    }
}
var m=new maruthi800()
m.run()