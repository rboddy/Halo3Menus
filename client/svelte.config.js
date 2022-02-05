// /** @type {import('@sveltejs/kit').Config} */

// import node from '@sveltejs/adapter-node';

// const config = {
// 	kit: {
// 		adapter: node(),
		
// 		// Override http methods in the Todo forms
// 		methodOverride: {
// 			allowed: ['PATCH', 'DELETE']
// 		}
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
