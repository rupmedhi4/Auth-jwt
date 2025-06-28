import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (id, res) => {
  const isProduction = process.env.NODE_ENV === 'production';

  const token = jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: '14d',
  });

  res.cookie('jwt', token, {
    httpOnly: false,                       
    secure: isProduction,                 
    sameSite: isProduction ? 'None' : 'Lax', 
    maxAge: 14 * 24 * 60 * 60 * 1000,     
  });

  return token

};

export { createTokenAndSaveCookie };
