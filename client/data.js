module.exports = function () {
  return {
    incidents: [{
        "id": 1,
        "number": 1,
        "customer_name": "Test1",
        "description": "Tech issue in my software",
        "narrative": "Not Responded",
        "priority": "low",
        "status": "new",
        "date": "2021-03-17T11:45:00.745Z"
      },
      {
        "id": 2,
        "number": 2,
        "customer_name": "Test2",
        "description": "Workflow issue in my software",
        "narrative": "Not Responded",
        "priority": "high",
        "status": "new",
        "date": "2021-03-17T11:45:13.247Z"
      },
      {
        "id": 3,
        "number": 3,
        "description": "error showing up\t\t\t\t",
        "priority": "medium",
        "status": "New",
        "date": "2021-03-17T18:54:55.150Z"
       
      },
      {
        "id": 4,
        "number": 4,
        "description": "stopped working\t\t",
        "priority": "high",
        "status": "New",
        "date": "2021-03-17T18:55:51.712Z"
        
      }
    ],
	orders: []
  }
}
