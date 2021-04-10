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
}