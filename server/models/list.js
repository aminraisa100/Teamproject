"Use Strict"
class Incident
{
    constructor(_id= "", customer_name = "", description = "", narrative = "", priority = "", status = "", date = Date() )
    {
        this._id = _id,
        this.customer_name = customer_name,
        this.description = description,
        this.narrative = narrative,
        this.priority = priority,
        this.status = status,
        this.date = date
    }

    toString()
    {
        return "_id        :"+ this._id + "\n"+
            "number        :"+ this.number + "\n" +    
            "customer_name :"+ this.customer_name + "\n" +
            "description   :"+ this.description + "\n" +
            "narrative     :" + this.narrative + "\n" +
            "priority      :" + this.priority + "\n" +
            "status        :" + this.status + "\n" +
            "date          :" + this.date + "\n"; 
                
    }
}