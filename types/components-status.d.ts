export type OpenModalParams = {
  modalName?: string;
  [key: string]: unknown; // Allow additional dynamic parameters
};

export type ComponentsStatusContextType = {
  isModalOpen: boolean;
  openModal: (params?: OpenModalParams) => void;
  closeModal: () => void;
};
