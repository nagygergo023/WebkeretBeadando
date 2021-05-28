export interface Device {
  id: string;
  identifier?: string[];
  definition: string;
  udiCarrier?: [
    {
      deviceIdentifier: string;
      issuer?: string;
      jurisdiction?: string;
      carrierAIDC?: string;
      carrierHRF?: string;
      entryType?: string;
    }
  ];
  status?: string;
  statusReason?: string;
  ifier?: string;
  manufacturer: string;
  manufactureDate?: string;
  expirationDate?: string;
  lotNumber?: string;
  serialNumber?: string;
  deviceName: string[];

  modelNumber?: string;
  partNumber?: string;
  patient: string;
  owner: string;
  contact?: string[];
  location: string;
  url: string;
  note?: string[];
  safety?: string[];
  parent?: string;
}
