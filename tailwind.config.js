/** @type {import('tailwindcss').Config} */

import forms from '@tailwindcss/forms'
import typo from '@tailwindcss/typography'


export default {
  content: [
		"./resources/**/*.blade.php",
		 "./resources/**/*.js",
		 "./vendor/robsontenorio/mary/src/View/Components/**/*.php"
	],
  theme: {
    extend: {},
  },
  plugins: [
		forms,
		typo,
		require("daisyui")
	],
}

