import test from 'ava'
import execa from 'execa'
import esolangs from 'esolangs'

test('success', async t => {
	const {stdout} = await execa('./cli.js', ['++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>>---.+++.+++++++++.----.+++++.'])
	await esolangs('++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>>---.+++.+++++++++.----.+++++.').then(response => {
		t.is(stdout, (`✔ ` + response))
	})
})

test('fail', async t => {
	const {stdout} = await execa('./cli.js', ['unicorn'])
	await esolangs('unicorn').then(response => {
		t.is(stdout, (`✖ ` + response))
	})
})