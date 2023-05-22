export class ExpensesCardService {
    public fetchData(): Promise<any> {
        // Perform data fetching logic
        return fetch('/assets/data/data.json')
            .then(response => response.json());
    }
}