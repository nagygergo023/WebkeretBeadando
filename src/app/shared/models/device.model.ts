export interface Device {
  id: string;
  identifier?: string[]; // Instance identifier
  definition: string; // The reference to the definition for the device
  udiCarrier?: [
    {
      // Unique Device Identifier (UDI) Barcode string
      deviceIdentifier: string; // Mandatory fixed portion of UDI
      issuer?: string; // UDI Issuing Organization
      jurisdiction?: string; // Regional UDI authority
      carrierAIDC?: string; // UDI Machine Readable Barcode String
      carrierHRF?: string; // UDI Human Readable Barcode String
      entryType?: string; // barcode | rfid | manual +
    }
  ];
  status?: string; //'active' | 'inactive' | 'entered-in-error' | 'unknown';
  statusReason?: string;
  // | 'online'
  // | 'paused'
  // | 'standby'
  // | 'offline'
  // | 'not-ready'
  // | 'transduc-discon'
  // | 'hw-discon'
  // | 'off';
  distinctIdentifier?: string; // The distinct identification string
  manufacturer: string; // Name of device manufacturer
  manufactureDate?: string; // Date when the device was made
  expirationDate?: string; // Date and time of expiry of this device (if applicable)
  lotNumber?: string; // Lot number of manufacture
  serialNumber?: string; // Serial number assigned by the manufacturer
  deviceName: string[];
  //[
  //   {
  //     // The name of the device as given by the manufacturer
  //     name: string; // R!  The name of the device
  //     type: string; // R!  udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
  //   }
  // ];
  modelNumber?: string; // The model number for the device
  partNumber?: string; // The part number of the device
  patient: string; // Patient to whom Device is affixed
  owner: string; // Organization responsible for device
  contact?: string[]; // Details for human/organization for support
  location: string; // Where the device is found
  url: string; // Network address to contact device
  note?: string[]; // Device notes and comments
  safety?: string[]; // Safety Characteristics of Device
  parent?: string; // The parent device
}
