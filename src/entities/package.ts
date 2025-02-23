export class Package {
    private list: string[] = [];

    constructor(readonly name: string) {
        if (name === undefined || name.trim() === '') throw new Error('Package name is required');

        const packages = name.trim().split(',');

        for (const pkg of packages) {
            if (pkg.trim() === '') {
                continue;
            }
            this.list.push(pkg.trim());
        }

        if (this.list.length === 0) throw new Error('Package name is required');
    }

    get names(): string[] {
        return this.list;
    }
}