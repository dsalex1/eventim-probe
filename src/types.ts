//types generated from json schema using http://json2ts.com/

export interface Image {
    id: string;
    copyright: string;
}

export interface Price {
    value: number;
    currency: string;
    basePrice: number;
    ticketFee: number;
    outletFee: number;
}

export interface Affiliate {
    id: string;
    name: string;
}

export interface Geo {
    latitude: string;
    longitude: string;
}

export interface Venue {
    id: string;
    name: string;
    street: string;
    zipCode: string;
    city: string;
    geo: Geo;
    country: string;
}

export interface Event {
    id: string;
    title: string;
    start: string;
    end: string;
    salesEnd: string;
    categoryId: string;
    category: string;
    subtitle: string;
    header: string;
    doorsOpen: string;
    doorsClose: string;
    image: Image;
    minPrice: Price;
    status: string;
    soldout: boolean;
    promotion: boolean;
    codeless: boolean;
    eventType: string;
    affiliate: Affiliate;
    venue: Venue;
    eventCount: number;
    venueCount: number;
    type: string;
    maxPrice: Price;
    salesStart?: string;
}