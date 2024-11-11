export type OpenModalParams = {
  modalName?: string;
  [key: string]: unknown; // Allow additional dynamic parameters
};

export type ComponentsStatusContextType = {
  isModalOpen: boolean;
  hasConsented: boolean;
  openModal: (params?: OpenModalParams) => void;
  closeModal: () => void;
  setConsent: (consent: boolean) => void;
};
