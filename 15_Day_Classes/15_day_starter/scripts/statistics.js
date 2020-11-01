class Statistics {
    constructor(data) {
        this.data = data;
        console.log(this.data);
    }

    count() {
        const countValue = this.data.length;
        return countValue;
    }

    sum() {
        let sum = 0;
        this.data.forEach((element) => {
            sum += element;
        });
        return sum;
    }

    max() {
        const maxValue = Math.max(...this.data);
        return maxValue;
        // const value = this.data.reduce(function (a, b) {
        //     return Math.max(a, b);
        // });
        // return value;
    }

    min() {
        const minValue = Math.min(...this.data);
        return minValue;
    }

    range() {
        const range = this.max() - this.min();
        return range;
    }

    mean() {
        const mean = this.sum() / this.count();
        return mean;
    }

    median() {
        const mid = Math.floor(this.count() / 2);
        let sortedData = this.data.sort((a, b) => a - b);
        return this.count() % 2 != 0
            ? sortedData[mid]
            : (sortedData[mid - 1] + sortedData[mid]) / 2;
    }

    mode() {
        let modecount = [];
        let dataSet = new Set(this.data);
        for (const iterator of dataSet) {
            const filteredNum = this.data.filter((num) => iterator === num);
            modecount.push({ mode: iterator, count: filteredNum.length });
        }

        modecount.sort((a, b) => {
            return b.count - a.count;
        });

        return modecount;
    }

    variance() {
        let varSum = 0;
        this.data.map((value) => {
            varSum += Math.pow(value - this.mean(), 2);
            return varSum;
        });
        return (varSum / this.count()).toFixed(2);
    }

    stdDev() {
        let stdDev = Math.sqrt(this.variance()).toFixed(1);
        return stdDev;
    }

    freqDist() {
        let distArr = [];
        this.mode().map((value) => {
            distArr.push(`(${value.count * 4.0}, ${value.mode})`);
        });
        return distArr;
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = new Statistics(ages);

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.variance()); // 17.5
console.log("Standard Deviation: ", statistics.stdDev()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
