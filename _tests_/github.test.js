// github access token 
// 5eb35f97672d788a2718cc534f060c274d15ca01
const GitHub = require('../lib/github');

describe('Integration with GitHub API', ( ) => {
	let github
	beforeAll(( ) => {
		github = new GitHub({
			accessToken: process.env.ACCESS_TOKEN,
			baseURL: 'http://api.github.com',
		})
	})

	test('Get a user', async ( ) => {
		const res = await github.getUser('jello0097')
		expect(res).toEqual(
			expect.objectContaining({
				login: 'jello0097'
			})
		)
	})
})
