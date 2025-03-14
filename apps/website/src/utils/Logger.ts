class Logger {
  private static isDevelopment(): boolean {
    return (
      import.meta.env.MODE === "development" ||
      (typeof window !== "undefined" && window.location.hostname.startsWith("dev."))
    );
  }

  static log(...messages: unknown[]): void {
    if (this.isDevelopment()) console.log(...messages);
  }

  static warn(...messages: unknown[]): void {
    if (this.isDevelopment()) console.warn(...messages);
  }

  static error(...messages: unknown[]): void {
    if (this.isDevelopment()) console.error(...messages);
  }

  static info(...messages: unknown[]): void {
    if (this.isDevelopment()) console.info(...messages);
  }

  static debug(...messages: unknown[]): void {
    if (this.isDevelopment()) console.debug(...messages);
  }
}

export default Logger;
