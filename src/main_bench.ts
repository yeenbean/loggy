import * as Loggy from "./main.ts";

Deno.bench({
    name: "Standard log",
    fn() {
        Loggy.log("Benchmarking...");
    },
});

Deno.bench({
    name: "Success log",
    fn() {
        Loggy.success("Benchmarking...");
    },
});

Deno.bench({
    name: "Failure log",
    fn() {
        Loggy.fail("Benchmarking...");
    },
});

Deno.bench({
    name: "Info log",
    fn() {
        Loggy.info("Benchmarking...");
    },
});

Deno.bench({
    name: "Warning log",
    fn() {
        Loggy.warn("Benchmarking...");
    },
});

Deno.bench({
    name: "Critical log",
    fn() {
        Loggy.critical("Benchmarking...");
    },
});

Deno.bench({
    name: "Up log",
    fn() {
        Loggy.up("Benchmarking...");
    },
});

Deno.bench({
    name: "Down log",
    fn() {
        Loggy.down("Benchmarking...");
    },
});
