// FormService.ts
interface FormData {
    id: string;
    documento: string;
    produtor: string;
    fazenda: string;
    cidade: string;
    estado: string;
    hectares: number | '';
    agricultavel: number | '';
    vegetacao: number | '';
    cultura: string;
  }
  
  const API_URL = 'https://run.mocky.io/v3/20319d86-b78a-497c-9a50-e2d519317999';
  
  export const saveFormData = async (
    data: FormData,
    setFormState: React.Dispatch<React.SetStateAction<FormData>>
  ): Promise<void> => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to save data. Status: ${response.status}`);
      }
  
      const newData = await response.json();
      setFormState(newData);
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  };
  
  export const getFormData = async (
    setFormState: React.Dispatch<React.SetStateAction<FormData>>
  ): Promise<void> => {
    try {
      const response = await fetch(API_URL);
  
      if (!response.ok) {
        throw new Error(`Failed to get data. Status: ${response.status}`);
      }
  
      const newData = await response.json();
      setFormState(newData);
    } catch (error) {
      console.error('Error getting data:', error);
      throw error;
    }
  };
  
  export const updateFormData = async (
    data: FormData,
    setFormState: React.Dispatch<React.SetStateAction<FormData>>
  ): Promise<void> => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update data. Status: ${response.status}`);
      }
  
      const newData = await response.json();
      setFormState(newData);
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };
  