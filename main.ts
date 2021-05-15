import { openDB, DBSchema } from 'idb';

async function doDatabaseStuff()
{
	const db = await openDB<DB>('documents', 1, {
		upgrade(db, oldVersion, newVersion, transaction)
		{
			// Argument of type 'string' is not assignable to parameter of type 'never'. ts(2345)
			db.createObjectStore('documents', { keyPath: 'id' });
		}
	});
}

interface DB extends DBSchema
{
	documents: {
		value: {
			id: string,
			text: string,
		}
		key: string,
	},
};
