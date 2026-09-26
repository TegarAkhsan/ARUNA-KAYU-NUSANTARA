import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageCircle
} from 'lucide-react';
import { companyData, getWhatsAppUrl } from '../data/company';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    requirement: 'Custom Furniture',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const requirementOptions = [
    'Furniture',
    'Custom Furniture',
    'Interior Project',
    'Corporate / B2B',
    'Lainnya'
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const bodyData = new URLSearchParams();
    bodyData.append('form-name', 'contact');
    bodyData.append('name', formData.name);
    bodyData.append('email', formData.email);
    bodyData.append('whatsapp', formData.whatsapp);
    bodyData.append('requirement', formData.requirement);
    bodyData.append('message', formData.message);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyData.toString()
    })
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setSubmitted(true);
        setLoading(false);
      });
  };

  const handleSendViaWhatsApp = () => {
    const text = `Halo ARUNA Living, saya ${formData.name || 'Calon Klien'}.\nEmail: ${formData.email || '-'}\nWhatsApp: ${formData.whatsapp || '-'}\nKebutuhan: ${formData.requirement}\nPesan: ${formData.message || 'Saya ingin konsultasi mengenai furniture.'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F5F1EA]/60 border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from Brief */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
            Start A Conversation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1F1D] leading-tight mb-4">
            Let's Build Something Beautiful Together.
          </h2>
          <p className="text-xs sm:text-base text-[#1F1F1D]/70 max-w-xl mx-auto leading-relaxed">
            Hubungi kami untuk mendiskusikan furniture impian Anda, meminta penawaran harga project komersial, atau menjadwalkan kunjungan ke workshop &amp; showroom kami di Surabaya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E8E4DC] shadow-sm space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1F1D] mb-1">
                  {companyData.brand}
                </h3>
                <p className="text-xs text-[#A47C52] font-semibold tracking-wider uppercase">
                  {companyData.name}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#1F1F1D]/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5F1EA] text-[#A47C52] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1F1F1D] block">Alamat Workshop &amp; Showroom</span>
                    <span>{companyData.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5F1EA] text-[#A47C52] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1F1F1D] block">Telepon / WhatsApp</span>
                    <a
                      href={getWhatsAppUrl("Halo ARUNA Living, saya ingin bertanya.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#A47C52] transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5F1EA] text-[#A47C52] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1F1F1D] block">Email Resmi</span>
                    <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#A47C52] transition-colors">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5F1EA] text-[#A47C52] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1F1F1D] block">Jam Operasional</span>
                    <span>{companyData.contact.businessDays}, {companyData.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-[#E8E4DC]">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1D]/60 block mb-3">
                  Ikuti Kami
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={companyData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#FAF9F5] border border-[#E8E4DC] text-[#1F1F1D] hover:bg-[#1F1F1D] hover:text-white transition-colors"
                    aria-label="Instagram ARUNA Living"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#FAF9F5] border border-[#E8E4DC] text-[#1F1F1D] hover:bg-[#1F1F1D] hover:text-white transition-colors"
                    aria-label="LinkedIn ARUNA Living"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E8E4DC] text-[#1F1F1D] text-xs font-semibold hover:bg-[#1F1F1D] hover:text-white transition-colors"
                    aria-label="TikTok ARUNA Living"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-[#1F1F1D] text-[#FAF9F5] flex items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-semibold text-white">Butuh Respon Cepat?</h4>
                <p className="text-xs text-[#FAF9F5]/70 mt-0.5">Konsultan kami aktif merespon via WhatsApp chat.</p>
              </div>
              <a
                href={getWhatsAppUrl("Halo ARUNA Living, saya ingin respon cepat untuk penawaran furniture.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#A47C52] hover:bg-[#8e6942] text-white rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Sales</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8E4DC] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1F1F1D] mb-2">
                Kirim Permintaan Penawaran
              </h3>
              <p className="text-xs sm:text-sm text-[#1F1F1D]/70 mb-8">
                Isi form di bawah ini untuk memulai konsultasi atau meminta penawaran harga. Tim kami akan menghubungi Anda dalam waktu 1x24 jam.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] space-y-4 animate-in fade-in duration-300">
                  <CheckCircle className="w-12 h-12 text-[#A47C52] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#1F1F1D]">
                    Permintaan Anda Telah Terkirim!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F1F1D]/75 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi ARUNA Living. Estimator kami akan meninjau kebutuhan Anda dan segera menghubungi melalui nomor WhatsApp yang dicantumkan.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-[#1F1F1D] text-white text-xs font-semibold rounded-full hover:bg-[#A47C52] transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1F1D] mb-1.5">
                        Nama Lengkap <span className="text-[#A47C52]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Contoh: Bpk. Andi Pratama"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] text-xs sm:text-sm text-[#1F1F1D] focus:outline-none focus:border-[#A47C52] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1F1D] mb-1.5">
                        Alamat Email <span className="text-[#A47C52]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] text-xs sm:text-sm text-[#1F1F1D] focus:outline-none focus:border-[#A47C52] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1F1D] mb-1.5">
                        Nomor WhatsApp <span className="text-[#A47C52]">*</span>
                      </label>
                      <input
                        id="whatsapp"
                        type="tel"
                        name="whatsapp"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] text-xs sm:text-sm text-[#1F1F1D] focus:outline-none focus:border-[#A47C52] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="requirement" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1F1D] mb-1.5">
                        Jenis Kebutuhan <span className="text-[#A47C52]">*</span>
                      </label>
                      <select
                        id="requirement"
                        name="requirement"
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] text-xs sm:text-sm text-[#1F1F1D] focus:outline-none focus:border-[#A47C52] focus:bg-white transition-colors cursor-pointer"
                      >
                        {requirementOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#1F1F1D] mb-1.5">
                      Pesan atau Keterangan Kebutuhan <span className="text-[#A47C52]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Jelaskan jenis furniture, estimasi ukuran, konsep desain yang diinginkan, atau timeline pengerjaan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] text-xs sm:text-sm text-[#1F1F1D] focus:outline-none focus:border-[#A47C52] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-4 px-6 bg-[#1F1F1D] hover:bg-[#A47C52] text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Mengirim Permintaan...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim Permintaan</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-4 px-6 bg-[#FAF9F5] hover:bg-[#F5F1EA] text-[#1F1F1D] border border-[#E8E4DC] rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                      title="Kirim draft pesan langsung ke WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[#A47C52]" />
                      <span>Kirim ke WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

        {/* Google Maps Section from Brief */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E4DC] shadow-sm">
            <div className="p-6 border-b border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A47C52] font-semibold block">Lokasi Workshop &amp; Showroom</span>
                <h4 className="font-serif text-lg font-bold text-[#1F1F1D]">Surabaya, Jawa Timur</h4>
                <p className="text-xs text-[#1F1F1D]/70">{companyData.address.full}</p>
              </div>
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Rungkut+Industri+No.+88,+Surabaya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F5F1EA] hover:bg-[#E8E4DC] text-[#1F1F1D] rounded-full text-xs font-semibold transition-colors self-start sm:self-auto"
              >
                <MapPin className="w-3.5 h-3.5 text-[#A47C52]" />
                <span>Buka di Google Maps</span>
              </a>
            </div>

            <div className="w-full h-80 bg-[#E8E4DC] relative">
              <iframe
                title="Lokasi Showroom ARUNA Living Surabaya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.262529734195!2d112.75432137499997!3d-7.324376492684065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb40a9a4e327%3A0x6b306b99deba1ad5!2sJl.%20Rungkut%20Industri%20Raya%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.02] grayscale-[15%]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
