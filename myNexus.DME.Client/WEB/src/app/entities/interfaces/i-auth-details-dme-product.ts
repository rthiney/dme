export interface IAuthDetailsDmeProduct {
	authorizationID: string,
	authorizationDetailID: string,
	specialty: string,
	hcpcCodeID: string,
	mod: string,  //?
	description: string,  //?
	requestedUnits: number,
	allowedUnits: number,
	um: string,  //?
	effectiveFromDate: Date,
	effectiveToDate: Date,
	authorizationDetailStatusName: string,
	pendingReasonName: string


/* 	id: number,
	specialty: string,
	hcpcs: string,
	mod: string,
	description: string,
	reqUnits: number,
	allowedUnits: number,
	um: string,
	startDate: Date,
	endDate: Date,
	status: string,
	pendingReason: string */
}

