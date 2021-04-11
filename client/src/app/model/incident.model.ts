export class Incident
{
	constructor(
		public _id?: number,
		public number?: number,
		public customer_name?: string,
		public description?: string,
		public narrative?: string,
		public priority?: string,
		public status?: string,
		public date?: string

	){}

	public toString(): string
	{
		return `Incident
		----------------------------------
		Number     : ${this.number}
		Name       : ${this.customer_name}
		Description: ${this.description}
		Narrative  : ${this.narrative}
		Priority   : ${this.priority}
		Status     : ${this.status}
		Date       : ${this.date}
		----------------------------------
		`
	}
}