export interface AppError {
  step: string;
  message: string;
  stack?: string;
  timestamp: number;
}

class ErrorCapture {
  private errors: AppError[] = [];
  private listeners: Array<(error: AppError) => void> = [];

  constructor() {
    // Capture global errors
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.captureError({
          step: 'Frontend Runtime',
          message: event.message || 'Unknown error',
          stack: event.error?.stack,
          timestamp: Date.now(),
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.captureError({
          step: 'Frontend Promise Rejection',
          message: event.reason?.message || String(event.reason) || 'Unhandled promise rejection',
          stack: event.reason?.stack,
          timestamp: Date.now(),
        });
      });
    }
  }

  captureError(error: AppError) {
    this.errors.push(error);
    this.listeners.forEach((listener) => listener(error));
  }

  getErrors(): AppError[] {
    return [...this.errors];
  }

  getLatestError(): AppError | null {
    return this.errors.length > 0 ? this.errors[this.errors.length - 1] : null;
  }

  clearErrors() {
    this.errors = [];
    this.listeners.forEach((listener) => listener({ step: '', message: '', timestamp: 0 }));
  }

  subscribe(listener: (error: AppError) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

export const errorCapture = new ErrorCapture();
