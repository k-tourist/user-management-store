export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email) {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  if (!phone) {
    return 'Phone number is required';
  }
  if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
    return 'Please enter a valid 10-digit phone number';
  }
  return '';
};

export const handleVerificationCodeChange = (index, value, verificationCode, setVerificationCode) => {
  if (!/^\d*$/.test(value)) return;

  const newCode = [...verificationCode];
  newCode[index] = value;
  setVerificationCode(newCode);

  if (value !== '' && index < 5) {
    const nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
    if (nextInput) nextInput.focus();
  }
};

export const handleVerificationCodeKeyDown = (index, e) => {
  if (e.key === 'Backspace' && !e.target.value && index > 0) {
    const prevInput = document.querySelector(`input[data-index="${index - 1}"]`);
    if (prevInput) prevInput.focus();
  }
};

export const maskEmail = (email) => {
  const [name, domain] = email.split('@');
  return `${name}@***${domain.slice(domain.lastIndexOf('.'))}`;
};

export const maskPhone = (phone) => {
  return phone.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2');
}; 
