declare class SweetShaker {
    files: string[];
    classes: Set<string>;
    importMap: Map<string, string>;
    resolvedImports: Map<string, string>;
    StateValues: Map<string, Set<string>>;
    constructor({ include }?: {
        include?: string[];
    });
    load(src: string): Promise<this>;
    setState(key: string, val: string): void;
    export(dir: string, name?: string): Promise<void>;
    get shaker(): string[];
}

export { SweetShaker };
