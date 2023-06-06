/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Activite = "activite",
	Hotel = "hotel",
	Transport = "transport",
	Users = "users",
	Ville = "ville",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ActiviteRecord = {
	nom?: string
	localisation?: string
	note?: number
	prix?: number
	avis_nom?: string
	avis_photo?: string
	avis_avis?: string
	description?: string
	photo?: string
	preview?: string
}

export type HotelRecord = {
	nom?: string
	localisation?: string
	note?: number
	prix?: number
	avis_nom?: string
	avis_photo?: string
	avis_avis?: string
	description?: string
	photo?: string
	preview?: string
}

export type TransportRecord = {
	nom?: string
	localisation?: string
	note?: number
	prix?: number
	avis_nom?: string
	avis_photo?: string
	avis_avis?: string
	description?: string
	photo?: string
	preview?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

export type VilleRecord = {
	nom?: string
	localisation?: string
	note?: number
	avis_nom?: string
	avis_photo?: string
	avis_avis?: string
	description?: string
	photo?: string
	preview?: string
	hotel?: RecordIdString[]
	activite?: RecordIdString[]
	transport?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type ActiviteResponse = Required<ActiviteRecord> & BaseSystemFields
export type HotelResponse = Required<HotelRecord> & BaseSystemFields
export type TransportResponse = Required<TransportRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields
export type VilleResponse<Texpand = unknown> = Required<VilleRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	activite: ActiviteRecord
	hotel: HotelRecord
	transport: TransportRecord
	users: UsersRecord
	ville: VilleRecord
}

export type CollectionResponses = {
	activite: ActiviteResponse
	hotel: HotelResponse
	transport: TransportResponse
	users: UsersResponse
	ville: VilleResponse
}