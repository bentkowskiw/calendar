export interface CalendarList{

    etag :string
  
    items :CalendarListEntry[]
    // Kind: Type of the collection ("calendar#calendarList").
    kind :string
  
    // NextPageToken: Token used to access the next page of this result.
    // Omitted if no further results are available, in which case
    // nextSyncToken is provided.
    nextPageToken:string

    // NextSyncToken: Token used at a later point in time to retrieve only
    // the entries that have changed since this result was returned. Omitted
    // if further results are available, in which case nextPageToken is
    // provided.
    nextSyncToken:string 
 
}
export interface CalendarListEntry{
	// AccessRole: The effective access role that the authenticated user has
	// on the calendar. Read-only. Possible values are:
	// - "freeBusyReader" - Provides read access to free/busy information.
	//
	// - "reader" - Provides read access to the calendar. Private events
	// will appear to users with reader access, but event details will be
	// hidden.
	// - "writer" - Provides read and write access to the calendar. Private
	// events will appear to users with writer access, and event details
	// will be visible.
	// - "owner" - Provides ownership of the calendar. This role has all of
	// the permissions of the writer role with the additional ability to see
	// and manipulate ACLs.
	accessRole :string 

	// BackgroundColor: The main color of the calendar in the hexadecimal
	// format "#0088aa". This property supersedes the index-based colorId
	// property. To set or change this property, you need to specify
	// colorRgbFormat=true in the parameters of the insert, update and patch
	// methods. Optional.
	backgroundColor:string

	// ColorId: The color of the calendar. This is an ID referring to an
	// entry in the calendar section of the colors definition (see the
	// colors endpoint). This property is superseded by the backgroundColor
	// and foregroundColor properties and can be ignored when using these
	// properties. Optional.
	colorId :string

	

	// Deleted: Whether this calendar list entry has been deleted from the
	// calendar list. Read-only. Optional. The default is False.
	deleted :boolean

	// Description: Description of the calendar. Optional. Read-only.
	description :string

	// Etag: ETag of the resource.
	etag :string

	// ForegroundColor: The foreground color of the calendar in the
	// hexadecimal format "#ffffff". This property supersedes the
	// index-based colorId property. To set or change this property, you
	// need to specify colorRgbFormat=true in the parameters of the insert,
	// update and patch methods. Optional.
	foregroundColor:string
	// Hidden: Whether the calendar has been hidden from the list. Optional.
	// The attribute is only returned when the calendar is hidden, in which
	// case the value is true.
	hidden :boolean

	// Id: Identifier of the calendar.
	id :string

	// Kind: Type of the resource ("calendar#calendarListEntry").
	kind :string

	// Location: Geographic location of the calendar as free-form text.
	// Optional. Read-only.
	location :string

	
	// Primary: Whether the calendar is the primary calendar of the
	// authenticated user. Read-only. Optional. The default is False.
	primary :boolean

  // Optional. The default is False.
	selected :boolean

	// Summary: Title of the calendar. Read-only.
	summary :string

	// SummaryOverride: The summary that the authenticated user has set for
	// this calendar. Optional.
	summaryOverride :string

	// TimeZone: The time zone of the calendar. Optional. Read-only.
	timeZone :string
}