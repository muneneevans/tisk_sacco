/* global  it, describe, expect */
import * as userSelectors from "../selectors"

describe("User selectors", () => {
	it("Must return an if user is authenticated", () => {
		let sampleState = {
			users: {
				users: {
					auth: {
						_isUserAuthenticated: false
					}
				}
			}
		}
		expect(userSelectors.getAuthStatus(sampleState.users)).toEqual(false)
	})
	it("Must return an if user is authenticated", () => {
		let sampleState = {
			users: {
				users: {
					auth: {
						_isUserAuthenticated: true
					}
				}
			}
		}

		expect(userSelectors.getAuthStatus(sampleState.users)).toEqual(true)
	})

	it("returns user information", () => {
		let sampleState = {
			users: {
				users: {
					userInformation: {
						email: "email@email.com",
						password: "pbkdf2",
						phone_number: "123456789",
						first_name: "john",
						last_name: "doe"
					}
				}
			}
		}
		expect(userSelectors.getUserInformation(sampleState.users)).toEqual(sampleState.users.users.userInformation)
	})
})