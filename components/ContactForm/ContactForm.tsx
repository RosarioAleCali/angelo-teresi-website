import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import FormData from '@/types/FormData';
import { serviceOptions, ServiceOptionKey } from '@/types/ServiceOptions';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [selectedService, setSelectedService] = useState<ServiceOptionKey | ''>('');
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!captchaVerified) {
      setFormStatus('Per favore completa il captcha');
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setFormStatus('Il tuo messaggio è stato inviato con successo!');
      } else {
        setFormStatus('Qualcosa è andato storto. Per favore riprova.');
      }
    } catch (error) {
      setFormStatus('Qualcosa è andato storto. Per favore riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const onServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ServiceOptionKey;
    setSelectedService(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white text-black"
    >
      <h3 className="text-xl font-semibold mb-2">Contattami</h3>

      {/* Name and Email in a responsive flexbox */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        {/* Name Field */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tropical focus:border-tropical sm:text-sm"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">E-Mail</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tropical focus:border-tropical sm:text-sm"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>
      </div>

      {/* Dropdown for Services */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Seleziona Servizio</label>
        <select
          {...register('service', { required: 'Please select a service' })}
          onChange={onServiceChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tropical focus:border-tropical sm:text-sm"
        >
          <option value="">-- Seleziona Servizio --</option>
          {Object.keys(serviceOptions).map((service) => (
            <option key={service} value={service}>
              {service.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-600 text-sm">{errors.service.message}</p>}
      </div>

      {/* Dropdown for Sub-Services */}
      {selectedService && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Seleziona Sottoservizio</label>
          <select
            {...register('subService', { required: 'Please select a sub-service' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tropical focus:border-tropical sm:text-sm"
          >
            <option value="">-- Seleziona Sottoservizio --</option>
            {serviceOptions[selectedService as ServiceOptionKey].map((subService) => (
              <option key={subService} value={subService}>
                {subService}
              </option>
            ))}
          </select>
          {errors.subService && <p className="text-red-600 text-sm">{errors.subService.message}</p>}
        </div>
      )}

      {/* Message Field */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Messaggio</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tropical focus:border-tropical sm:text-sm"
        ></textarea>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>

      {/* CAPTCHA */}
      <div className="mt-6">
        <ReCAPTCHA
          sitekey={process.env.RECAPTCHA_SITE_KEY as string}
          onChange={onCaptchaChange}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-tropical text-white font-bold py-2 px-6 rounded-lg border border-transparent transition-colors duration-200 ease-in-out hover:bg-[#2a8d8a] hover:border-[#28a097] hover:text-white active:bg-[#228e8d] focus:outline-none focus:ring-2 focus:ring-tropical focus:ring-opacity-30"
        >
          {isSubmitting ? 'In Invio...' : 'Invio'}
        </button>
      </div>

      {/* Form Status */}
      {formStatus && <p className={`mt-4 text-sm ${formStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{formStatus}</p>}
    </form>
  );
}
