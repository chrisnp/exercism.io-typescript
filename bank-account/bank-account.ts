export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
  constructor() {
    throw new Error('Remove this statement and implement this function')
  }

  open(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  close(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  deposit(_argument: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  withdraw(_argument: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  get balance(): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
