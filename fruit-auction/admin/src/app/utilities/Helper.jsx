/*
  string
  convert snake caset to pascal 
*/

import { toAbsoluteUrl } from "../../_metronic/helpers";

export const snakeToPascal = (str) => {
  if (!str) return null
  str += '';
  str = str.split('_');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1, str[i].length) + " ";
  }
  return str.join('');
};

export const formatDate = (inputDate) => {
  if (!inputDate) return null;

  const hasTime = /\d{2}:\d{2}/.test(inputDate);
  const options = hasTime
    ? { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true }
    : { year: 'numeric', month: '2-digit', day: '2-digit', };

  return new Date(inputDate).toLocaleString('en-US', options);
};



export const AgeCalculator = ({ dob }) => {
  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
      months--;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Check if age is less than 1 year
    if (years < 1) {
      if (months === 0) {
        return `${days} days`;
      } else {
        return `${months} months ${days} days`;
      }
    }

    // Check if age is greater than 5 years
    if (years > 5) {
      return `${years} years ${months} months`;
    } else {
      return `${years} years ${months} months ${days} days`;
    }
  };
  return <span>{calculateAge()}</span>;
};

export const TitleCase = (str) => {
  if (!str) return null
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

// UserProfileImage.js






